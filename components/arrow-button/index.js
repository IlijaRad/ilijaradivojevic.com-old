import * as React from "react";
import clsx from "clsx";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "../../public/assets/icons/ArrowIcon";
import { useElementState } from "../../hooks/use-element-state";

const arrowVariants = {
  down: {
    initial: { y: 0 },
    hover: { y: 4 },
    focus: {
      y: [0, 4, 0],
      transition: { repeat: Infinity },
    },
    active: { y: 12 },
  },
  up: {
    initial: { y: 0 },
    hover: { y: -4 },
    focus: {
      y: [0, -4, 0],
      transition: { repeat: Infinity },
    },
    active: { y: -12 },
  },
  left: {
    initial: { x: 0 },
    hover: { x: -4 },
    focus: {
      x: [0, -4, 0],
      transition: { repeat: Infinity },
    },
    active: { x: -12 },
  },
  right: {
    initial: { x: 0 },
    hover: { x: 4 },
    focus: {
      x: [0, 4, 0],
      transition: { repeat: Infinity },
    },
    active: { x: 12 },
  },
  "top-right": {
    initial: { x: 0, y: 0 },
    hover: { x: 4, y: -4 },
    focus: {
      x: [0, 4, 0],
      y: [0, -4, 0],
      transition: { repeat: Infinity },
    },
    active: { x: 12, y: -12 },
  },
};

function getBaseProps({ textSize, className }) {
  return {
    className: clsx(
      "dark:text-white text-black inline-flex items-center text-left font-medium focus:outline-none cursor-pointer transition",
      {
        "text-xl": textSize === "medium",
        "text-lg": textSize === "small",
      },
      className
    ),
  };
}

function ArrowButtonContent({ children, direction = "right" }) {
  const circumference = 28 * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {children &&
      (direction === "right" ||
        direction === "up" ||
        direction === "top-right") ? (
        <span className="mr-8 text-xl font-medium text-black dark:text-white">
          {children}
        </span>
      ) : null}

      <div className="relative inline-flex h-14 w-14 flex-none items-center justify-center p-1">
        <div className="absolute text-gray-200 dark:text-gray-600">
          <svg width="60" height="60">
            <circle
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              r="28"
              cx="30"
              cy="30"
            />

            <motion.circle
              className="text-black dark:text-white"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              r="28"
              cx="30"
              cy="30"
              style={{ strokeDasharray, rotate: -90 }}
              variants={{
                initial: { strokeDashoffset: circumference },
                hover: { strokeDashoffset: 0 },
                focus: { strokeDashoffset: 0 },
                active: { strokeDashoffset: 0 },
              }}
              transition={{
                damping: 0,
                ...(shouldReduceMotion ? { duration: 0 } : null),
              }}
            />
          </svg>
        </div>

        <motion.span
          transition={shouldReduceMotion ? { duration: 0 } : {}}
          variants={shouldReduceMotion ? {} : arrowVariants[direction]}
        >
          <ArrowIcon
            className="text-black dark:text-white"
            direction={direction}
          />
        </motion.span>
      </div>

      {children && (direction === "left" || direction === "down") ? (
        <span className="ml-8 text-xl font-medium">{children}</span>
      ) : null}
    </>
  );
}

function ArrowButton({ onClick, type, ...props }) {
  const [ref, state] = useElementState();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      onClick={onClick}
      type={type}
      {...getBaseProps(props)}
      ref={ref}
      animate={state}
      transition={shouldReduceMotion ? { duration: 0 } : {}}
    >
      <ArrowButtonContent {...props} />
    </motion.button>
  );
}

const MotionLink = motion(Link);

function ArrowLink({ to, href, ...props }) {
  const [ref, state] = useElementState();
  const shouldReduceMotion = useReducedMotion();

  if (href) {
    return (
      <motion.a
        href={href}
        {...getBaseProps(props)}
        ref={ref}
        animate={state}
        transition={shouldReduceMotion ? { duration: 0 } : {}}
      >
        <ArrowButtonContent {...props} />
      </motion.a>
    );
  } else if (to) {
    return (
      <MotionLink
        to={to}
        {...getBaseProps(props)}
        ref={ref}
        animate={state}
        transition={shouldReduceMotion ? { duration: 0 } : {}}
      >
        <ArrowButtonContent {...props} />
      </MotionLink>
    );
  }
  throw new Error("Must provide either to or href to ArrowLink");
}

function BackLink({ to, className, children }) {
  const [ref, state] = useElementState();
  const shouldReduceMotion = useReducedMotion();
  return (
    <MotionLink
      to={to}
      className={clsx(
        "flex space-x-4 text-black focus:outline-none dark:text-white",
        className
      )}
      ref={ref}
      animate={state}
      transition={shouldReduceMotion ? { duration: 0 } : {}}
    >
      <motion.span
        variants={shouldReduceMotion ? {} : arrowVariants.left}
        transition={shouldReduceMotion ? { duration: 0 } : {}}
      >
        <ArrowIcon direction="left" />
      </motion.span>
      <span>{children}</span>
    </MotionLink>
  );
}

export { ArrowButton, ArrowLink, BackLink };
