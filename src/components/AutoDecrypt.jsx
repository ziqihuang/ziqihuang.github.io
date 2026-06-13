import { Children, cloneElement, isValidElement } from "react";
import DecryptedText from "./reactbits/DecryptedText";

// Recursively walks a React subtree and wraps every plain-text node in
// DecryptedText. Element structure, classNames and props are preserved —
// only string children are replaced. Component internals (children passed
// via props other than `children`) are left untouched.
function wrap(node, keyPrefix) {
  return Children.map(node, (child, i) => {
    const key = `${keyPrefix}-${i}`;

    if (typeof child === "string") {
      if (!child.trim()) return child; // keep pure whitespace as-is
      return (
        <DecryptedText
          key={key}
          text={child}
          animateOn="view"
          speed={40}
          maxIterations={9}
          encryptedClassName="dt-enc"
        />
      );
    }

    if (typeof child === "number") return child;

    if (isValidElement(child)) {
      const childChildren = child.props?.children;
      if (childChildren == null) return child;
      return cloneElement(child, { ...child.props }, wrap(childChildren, key));
    }

    return child;
  });
}

export default function AutoDecrypt({ children }) {
  return <>{wrap(children, "ad")}</>;
}
