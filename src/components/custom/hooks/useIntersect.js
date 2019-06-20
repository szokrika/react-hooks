import "intersection-observer";
import { useEffect, useRef, useState } from "react";

export default ({ root = null, rootMargin, threshold = 1 }) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);
  // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  const observer = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold
    })
  );

  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node]);

  return [setNode, entry];
};
