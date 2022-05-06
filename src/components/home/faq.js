import React from "react";
import { Collapse, Button } from "antd";
const { Panel } = Collapse;

const items = [
  {
    key: "1",
    title: "How to setup the theme?",
    content:
      "Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant bonorum, te ius vide maiorum hendrerit. In alii instructior vix, vis et elit maluisset, usu recusabo atomorum ut. Nibh diceret dolores vix et, id omnis adhuc maiestatis vim, ei mel legendos mnesarchum argumentum. Semper nusquam urbanitas sea te.",
  },
  {
    key: "2",
    title: "Can I change plan or cancel at any time?",
    content:
      "Postea ceteros corrumpit ius te, eos epicuri intellegebat consequuntur et. Sint quot suscipiantur ea nam. Nam pericula evertitur ut, per et quod nostro, autem augue id has. Virtute epicurei quo te, pri et novum essent senserit.",
  },
  {
    key: "3",
    title: "How to access through cloud?",
    content:
      "Eu veritus ancillae suavitate per, cum in appellantur efficiantur. Eum cu clita ponderum lobortis, usu dicat exerci et, eam alii oblique interesset ea. Suas quidam volumus id eam, id populo euripidis temporibus pri. At eum quas putent iriure, fugit tritani sed ad. Per ad magna possim aliquam, est aeque exerci verear an, qui cu modus audire detraxit. Duo ne nostro rationibus, nam mutat omittam evertitur ad, meliore gubergren voluptatum at mel.",
  },
  {
    key: "4",
    title: "Can I manage multiple task?",
    content:
      "Mentitum offendit appareat nam ex, mea timeam nonumes pertinacia ne. Autem altera an vix, cu soluta aliquid pro, ne sit natum neglegentur. Ea ridens iudicabit eam, in dico appetere mediocrem nec. Sea idque consetetur no. Sonet minimum ex eam, vis an semper consequuntur definitionem. Vel legimus nostrum hendrerit eu, ea velit facete nec.",
  },
  {
    key: "5",
    title: "How can I change my password?",
    content:
      "Usu dolorem ceteros te. Veri exerci ne vix, modo ignota an qui. Ne oblique antiopam quo. Ex quem saepe cum, temporibus comprehensam qui at. Aliquip habemus fierent qui at. No facete omnesque argumentum sea, est tale error nihil ad.",
  },
  {
    key: "6",
    title: "How to manage my account?",
    content:
      "Erant vitae alterum in mel, viris rationibus argumentum eu sea. Per ei diceret constituto, ei qui simul intellegam, ut eos dolor ceteros. Altera contentiones et eam. Discere alienum intellegat te duo. Erat dissentiet ei sed, eius dicat ne eum. Id tation everti nam, quo cu magna possit patrioque.",
  },
];

export default function AppFaq() {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>
            Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam
          </p>
        </div>
        {items.map((item) => {
          return (
            <Collapse defaultActiveKey={["1"]} key={item.key}>
              <Panel header={item.title} key={item.key}>
                <p>{item.content}</p>
              </Panel>
            </Collapse>
          );
        })}

        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            velit necessitatibus praesentium aliquid eos in neque recusandae,
            incidunt esse dolore voluptatum nesciunt quod soluta consequuntur
            voluptatibus ab excepturi nobis! Porro!
          </p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i> Email your question
          </Button>
        </div>
      </div>
    </div>
  );
}
