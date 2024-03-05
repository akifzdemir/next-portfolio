import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const getDir = (event, el) => {
  const coordinates = { x: event.pageX, y: event.pageY };
  const w = el.clientWidth;
  const h = el.clientHeight;

  const newX = (coordinates.x - el.offsetLeft - w / 2) * (w > h ? h / w : 1);
  const newY = (coordinates.y - el.offsetTop - h / 2) * (h > w ? w / h : 1);

  let direction =
    Math.round((Math.atan2(newY, newX) * (180 / Math.PI) + 180) / 90 + 3) % 4;
  return direction;
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
