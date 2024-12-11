"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import Btn from "./Btn";

type LanguagesType = {
  device: "desktop" | "mobile";
};

const Languages = ({ device }: LanguagesType) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`${"languages-container"} ${
        device === "desktop" ? "desktop" : "mobile"
      } ${language === "ES" ? "es-active" : "en-active"}`}
    >
      <Btn>
        <div
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setLanguage("ES");
            }
          }}
          onClick={() => setLanguage("ES")}
          className="language es"
        >
          ES
        </div>
      </Btn>
      <Btn>
        <div
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setLanguage("EN");
            }
          }}
          onClick={() => setLanguage("EN")}
          className="language en"
        >
          EN
        </div>
      </Btn>
    </div>
  );
};

export default Languages;
