import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { AppContext } from "../store/AppContext";
import { I18nContext } from "../store/I18nContext";

import LanguageSelector from "./LanguageSelector";
import Stateful from "./Stateful";
import Effects from "./Effects";
import Context from "./Context";
import Ref from "./Ref";
import Callback from "./Callback";
import Memo from "./Memo";
// Custom hooks
import Geolocation from "./custom/Geolocation";
import UseFetchComp from "./custom/UseFetchComp";
import Modal from "./Modal";
import { FLesson } from "./Lesson";
import Animate from "./Animate";

export default function All() {
  const [modalOpen, setModalOpen] = useState(false);
  const [a, setA] = useState(0);
  const [b, setB] = useState(10);

  const { translate } = useContext(I18nContext);
  const { state } = useContext(AppContext);

  const updateA = value => setA(a + value);
  const updateB = value => setB(b + value);

  useEffect(() => {
    if (a < 40) {
      setTimeout(() => {
        updateA(13);
      }, 3000);
    }

    if (b < 60) {
      setTimeout(() => {
        updateB(10);
      }, 1500);
    }
  }, [a, b]);

  useLayoutEffect(() => console.log("useLayoutEffect if 'a' changes"), [a]);

  return (
    <div className="all-features">
      <LanguageSelector />
      <h1>{translate("title")}</h1>
      <p>{translate("intro")}</p>
      {/* <CLesson /> */}
      <FLesson />

      <Stateful />
      <Effects />
      <Context />
      <Ref defaultValue="test value" />
      <Callback a={a} b={b} />
      <Memo state={state} a={a} b={b} />

      <h2>{translate("custom")}</h2>
      <Animate />
      <button
        className="button"
        data-testid="ref-modal-button"
        onClick={() => setModalOpen(true)}
      >
        Show Modal
      </button>

      {modalOpen && (
        <Modal
          title="test title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          onClose={() => setModalOpen(false)}
        />
      )}
      <hr />
      <Geolocation />
      <UseFetchComp />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
