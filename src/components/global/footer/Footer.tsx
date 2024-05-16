import SourceCodeButton from "./SourceCodeButton";
import HeartAnimation from "./HeartAnimation";

/* eslint-disable react/jsx-no-comment-textnodes */
export default function Footer() {
  return (
    <div className="mx-14 flex items-center justify-between border-t border-primary-dark py-4 max-md:flex-col">
      <span className="mr-4 text-center text-lg italic text-comment max-lg:text-base max-md:m-0">
        /* designed and created with <HeartAnimation /> by Krumbit. all rights reserved. */
      </span>
      <SourceCodeButton />
    </div>
  );
}
