import clsx from "clsx";
import GridContainer from "./grid-container";
import { CopyButton } from "./copy-button";

interface Showcase {
  name: string;
  description: string;
  logo: string;
  isTemplate?: boolean;
}

const BEFORE_AND_AFTER_ONLY_IN_FIRST_COLUMN_OF_CURRENT_GRID = [
  "before:hidden after:hidden",
  "xl:[.grid>div:nth-child(4n+1)_&]:before:block xl:[.grid>div:nth-child(4n+1)_&]:after:block",
  "lg:max-xl:[.grid>div:nth-child(3n+1)_&]:before:block lg:max-xl:[.grid>div:nth-child(3n+1)_&]:after:block",
  "sm:max-lg:[.grid>div:nth-child(2n+1)_&]:before:block sm:max-lg:[.grid>div:nth-child(2n+1)_&]:after:block",
  "max-sm:before:block max-sm:after:block",
].join(" ");

export default function Card({ name, description, logo, isTemplate }: Showcase) {

  return (
    <div
      className="group dark:border-bg-white/10 relative isolate border-x border-gray-950/5 transition-colors hover:bg-gray-950/5 max-sm:border-0 sm:max-lg:nth-[2n]:border-r-transparent sm:max-lg:nth-[2n+1]:border-l-transparent lg:max-xl:nth-[3n]:border-r-transparent lg:max-xl:nth-[3n+1]:border-l-transparent xl:nth-[4n]:border-r-transparent xl:nth-[4n+1]:border-l-transparent dark:border-white/10 dark:hover:bg-white/2.5"
    >
      <GridContainer className={clsx("p-4", BEFORE_AND_AFTER_ONLY_IN_FIRST_COLUMN_OF_CURRENT_GRID)}>
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
              <img
                src={logo}
                alt={`${name} logo`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* <div className="flex flex-wrap items-center gap-1 mb-2"> */}
              <h2 className="text-md font-medium text-gray-500 dark:text-gray-400">{name}</h2>
              {isTemplate && (
                <p
                  aria-label="This is a template"
                  className="rounded-full border border-transparent bg-sky-100 px-1.5 text-[0.6875rem] leading-5 font-semibold text-sky-500 dark:bg-gray-600/50 dark:text-gray-200 dark:group-hover:bg-sky-500 dark:group-hover:text-white"
                >
                  Template
                </p>
              )}
            {/* </div> */}
            <div className="relative group/account flex items-center gap-3 pr-12">
              <p className="font-mono text-[1.6rem] font-semibold text-gray-900 dark:text-white flex-1">
                {description}
              </p>
              <div className="opacity-0 group-hover/account:opacity-100 transition-opacity duration-200">
                <CopyButton
                  content={description}
                  variant="ghost"
                  size="sm"
                  className="bg-gray-100/80 hover:bg-gray-200 dark:bg-gray-800/80 dark:hover:bg-gray-700 backdrop-blur-sm"
                  aria-label={`Copy account number ${description}`}
                />
              </div>
            </div>
          </div>
        </div>
      </GridContainer>
    </div>
  );
}