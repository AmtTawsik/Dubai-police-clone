import React from "react";
import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  // Open Answer Handler
  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b faq-sec"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-yellow-400 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-fuchsia-800">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

// All Questions And Answers
const NightWorkFaQ = () => {
  const faqsList = [
    {
      q: "Description",
      a: "As an umbrella company, The Simple Umbrella is a payroll provider for contractors. We act as your employer, process your wages, and offer additional support such as administration. It means you can work between different contracts and they handle your admin and payroll, so your activities are focused on finishing and finding more work.",
    },
    {
      q: "Beneficiaries",
      a: "Once you’ve signed up you with us you will have an employment contract and benefit from all of the same employment rights as other permanent employees. You will be able to carry out multiple short-term contracts with less overall risk.",
    },
    {
      q: "Required Documents",
      a: "R35 or as is more formerly known “Intermediaries Legislation” c was introduced by HMRC in 2000 as tax legislation specifically designed to battle tax avoidance by workers supplying services to clients through an intermediary, such as a limited company and used to assess whether a contractor is a genuine contractor rather than a ‘disguised’ employee, for the purposes of paying tax.",
    },
    {
      q: "Required Information",
      a: "There are many intricacies to determinign wheter you fall under IR35, and you should contact us so we can analyse your situation specifically However,  there are a few principles to consider to check if you fall under IR35. For example, you should see whether the contract specifically mentions these principles:",
    },
    {
      q: "Terms and Conditions",
      a: "As your employer, we ensure that you are covered by all our insurances. We provide employees with Professional Indemnity, Employers’ Liability and Public Liability Insurance as a standard.",
    },
    {
      q: "Working hours",
      a: "As your employer, we ensure that you are covered by all our insurances. We provide employees with Professional Indemnity, Employers’ Liability and Public Liability Insurance as a standard.",
    },
    {
      q: "Period of service",
      a: "As your employer, we ensure that you are covered by all our insurances. We provide employees with Professional Indemnity, Employers’ Liability and Public Liability Insurance as a standard.",
    },
    {
      q: "Validity",
      a: "As your employer, we ensure that you are covered by all our insurances. We provide employees with Professional Indemnity, Employers’ Liability and Public Liability Insurance as a standard.",
    },
  ];

  return (
    <section className="leading-relaxed mt-5 flex justify-center w-11/12 mx-auto">
      <div className="space-y-3 text-center">
        
      </div>
      <div className="mt-14 max-w-2xl ">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default NightWorkFaQ;
