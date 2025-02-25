import { useState } from "react";
import parse from "html-react-parser";

// Category component for reusability
interface CategoryProps {
  categoryId: number;
  categoryTitle: string;
  categoryDescription: string;
  options: {
    label: string;
    value: string;
    id?: string;
    identity: string;
    labelHTML: any;
  }[];
  selectedOption: string | null;
  setSelectedOption: (value: string | null) => void;
  selectedId: string | null;
  setSelectedId: (value: string | null) => void;
  setTotalScore: any;
  spinKey: number;
  setSpinKey: any;
}

const Category = ({
  categoryTitle,
  categoryDescription,
  options,
  selectedOption,
  setSelectedOption,
  setSelectedId,
  selectedId,
  setTotalScore,
  spinKey,
  setSpinKey,
}: CategoryProps) => {
  function handleCheckboxChange(value: string, identity: string) {
    if (selectedId !== identity) {
      if (selectedOption !== null) {
        setTotalScore((prev: any) => prev - Number(selectedOption));
      }
      setSelectedOption(value);
      setSelectedId(identity);
      setTotalScore((prev: any) => prev + Number(value));
    } else {
      setSelectedOption(null);
      setSelectedId(null);
      setTotalScore((prev: any) => prev - Number(value));
    }
    setSpinKey((prevKey: any) => prevKey + 1);
  }

  return (
    <div className="w-full">
      <div className="font-semibold px-5 py-1 w-full bg-red-800 text-white">
        {categoryTitle}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-0">
        <div className="bg-black py-5 pl-5 text-white sm:text-gray-900 sm:bg-transparent">
          {parse(categoryDescription)}
        </div>
        <div className="flex flex-col p-5 items-center ">
          {options.map(({ label, value, id, identity, labelHTML }) => (
            <div
              className="flex w-full pl-5 md:pl-10 font-semibold my-2 items-start justify-start gap-1"
              key={value}
            >
              <input
                className="mt-2"
                id={id ? id : label}
                type="checkbox"
                value={value}
                onChange={() => handleCheckboxChange(value, identity)}
                checked={selectedId === identity}
              />
              {parse(labelHTML)}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 p-5 bg-slate-100 sm:bg-transparent sm:items-end sm:flex-col sm:justify-start">
          <div className="flex sm:flex-col gap-2 items-center justify-center">
            <h1 className="font-semibold">Points Gained : </h1>
            <span
              key={spinKey} // Triggering the spin animation
              className="w-10 h-10 rounded-full bg-purple-600 text-white flex flex-col items-center justify-center font-semibold flip"
            >
              {Number(selectedOption)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

function App2() {
  const [selectedOption1, setSelectedOption1] = useState<string | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<string | null>(null);
  const [selectedOption3, setSelectedOption3] = useState<string | null>(null);
  const [selectedOption4, setSelectedOption4] = useState<string | null>(null);
  const [selectedOption5, setSelectedOption5] = useState<string | null>(null);
  const [selectedOption6, setSelectedOption6] = useState<string | null>(null);
  const [selectedOption7, setSelectedOption7] = useState<string | null>(null);
  const [selectedOption8, setSelectedOption8] = useState<string | null>(null);
  const [selectedOption9, setSelectedOption9] = useState<string | null>(null);
  const [selectedOption10, setSelectedOption10] = useState<string | null>(null);
  const [selectedOption11, setSelectedOption11] = useState<string | null>(null);
  const [selectedOption12, setSelectedOption12] = useState<string | null>(null);

  const [selectedId1, setSelectedId1] = useState<string | null>(null);
  const [selectedId2, setSelectedId2] = useState<string | null>(null);
  const [selectedId3, setSelectedId3] = useState<string | null>(null);
  const [selectedId4, setSelectedId4] = useState<string | null>(null);
  const [selectedId5, setSelectedId5] = useState<string | null>(null);
  const [selectedId6, setSelectedId6] = useState<string | null>(null);
  const [selectedId7, setSelectedId7] = useState<string | null>(null);
  const [selectedId8, setSelectedId8] = useState<string | null>(null);
  const [selectedId9, setSelectedId9] = useState<string | null>(null);
  const [selectedId10, setSelectedId10] = useState<string | null>(null);
  const [selectedId11, setSelectedId11] = useState<string | null>(null);
  const [selectedId12, setSelectedId12] = useState<string | null>(null);

  const [totalScore, setTotalScore] = useState(0);

  // Separate spin keys for each category
  const [spinKey1, setSpinKey1] = useState(0);
  const [spinKey2, setSpinKey2] = useState(0);
  const [spinKey3, setSpinKey3] = useState(0);
  const [spinKey4, setSpinKey4] = useState(0);
  const [spinKey5, setSpinKey5] = useState(0);
  const [spinKey6, setSpinKey6] = useState(0);
  const [spinKey7, setSpinKey7] = useState(0);
  const [spinKey8, setSpinKey8] = useState(0);
  const [spinKey9, setSpinKey9] = useState(0);
  const [spinKey10, setSpinKey10] = useState(0);
  const [spinKey11, setSpinKey11] = useState(0);
  const [spinKey12, setSpinKey12] = useState(0);

  // Array of category data
  const categories = [
    {
      categoryId: 1,
      categoryTitle: "1. ACT Residence",
      categoryDescription: `
       <ul className="list-disc font-semibold">
            <h1 className="font-bold text-[17px] leading-6 mb-3">
              How long have you lived in Canberra in the last eight years? Your
              claimed period of ACT residence does not have to be continuous. To
              claim points, you must meet these minimum criteria:
            </h1>

            <li className="mx-5">
              Your bank statements prove your claimed date of arrival and the
              claimed period of residence in Canberra.
            </li>
            <li className="mx-5">
              You must record any period away from Canberra (seven days or more)
              in the 'Summary of ACT residence' at Attachment D.
            </li>
            <li className="mx-5">
              You cannot be away from Canberra for more than six weeks in any
              year (e.g. for a holiday or to visit family) unless you are
              claiming two or more years residency and you were not away from
              Canberra for more than twelve weeks in any given year. You must
              provide evidence that the ACT continued to be your primary place
              of residence for these twelve weeks, such as rent or other housing
              payments. These payments need to be highlighted in your bank
              statements.
            </li>
            <li className="mx-5">
              You cannot live, study, or work interstate for any period of
              claimed ACT residence, unless:
              <ul className="list-disc px-4">
                <li className="marker:text-red-900">
                  You studied interstate for no more than one night (or two
                  days) per week;
                </li>
                <li className="marker:text-red-900">
                  You worked in regional NSW while living in the ACT, provided
                  you worked within a 30-minute commute of your Canberra-based
                  home; or,
                </li>
                <li className="marker:text-red-900">
                  You lived in regional NSW while working in Canberra, provided
                  you lived within a 30-minute commute of your Canberra-based
                  work.
                </li>
              </ul>
            </li>
          </ul>
      `,
      options: [
        {
          label: "Five years plus",
          labelHTML: `<label htmlFor="Five years plus">Five years plus</label>`,
          value: "25",
          identity: "group-1-member-1",
        },
        {
          label: "Four to five years",
          labelHTML: `<label htmlFor="Four to five years">Four to five years</label>`,
          value: "20",
          identity: "group-1-member-2",
        },
        {
          label: "Three to four years",
          labelHTML: `<label htmlFor="Three to four years">Three to four years</label>`,
          value: "15",
          identity: "group-1-member-3",
        },
        {
          label: "Two to three years",
          labelHTML: `<label htmlFor="Two to three years">Two to three years</label>`,
          value: "10",
          identity: "group-1-member-4",
        },
        {
          label: "One to two years",
          value: "5",
          identity: "group-1-member-5",
          labelHTML: `<label htmlFor="One to two years">One to two years</label>`,
        },
        {
          label: "Less than one year",
          labelHTML: `<label htmlFor="Less than one year">Less than one year</label>`,
          value: "0",
          identity: "group-1-member-6",
        },
      ],
      selectedOption: selectedOption1,
      setSelectedOption: setSelectedOption1,
      selectedId: selectedId1,
      setSelectedId: setSelectedId1,
      setTotalScore,
      spinKey: spinKey1,
      setSpinKey: setSpinKey1,
    },
    {
      categoryId: 2,
      categoryTitle: "2. English Proficiency",
      categoryDescription: `
        <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">
              What is your English proficiency level as defined by Home Affairs?
            </span>
            <span className="leading-6 font-semibold">
              You meet the Home Affairs requirement for the level of English
              claimed. You must have a valid English test result.
            </span>
          </div>
      `,
      options: [
        {
          label: "Superior",
          labelHTML: `<label htmlFor="Superior">Superior</label>`,
          value: "15",
          identity: "group-2-member-1",
        },
        {
          label: "Proficient",
          value: "10",
          identity: "group-2-member-2",

          labelHTML: `<label htmlFor="Proficient">Proficient</label>`,
        },
        {
          label: "Competent",
          value: "0",
          identity: "group-2-member-3",

          labelHTML: `<label htmlFor="Competent">Competent</label>`,
        },
      ],
      selectedOption: selectedOption2,
      setSelectedOption: setSelectedOption2,
      setTotalScore,
      spinKey: spinKey2,
      setSpinKey: setSpinKey2,
      selectedId: selectedId2,
      setSelectedId: setSelectedId2,
    },
    {
      categoryId: 3,
      categoryTitle: "3. Spouse/Partner English Proficiency",
      categoryDescription: `
      <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">
              What is your spouse/partner's English proficiency as defined by
              Home Affairs?
            </h1>
            <p className="font-semibold">
              They meet the Home Affairs requirement for the level of English
              claimed or hold an Australian passport.
            </p>
            <p className="font-semibold">
              Note: an Australian passport only equates to 'competent' English.
              If you wish to claim point in this category, your spouse/partner
              must meet the Home Affairs requirements for the level of English
              claimed.
            </p>
          </div>
      `,
      options: [
        {
          label: "Superior/proficient",
          labelHTML: `<label htmlFor="Superior/proficient">Superior/proficient</label>`,
          value: "5",
          identity: "group-3-member-1",
        },
        {
          label: "Decent",
          value: "00",
          identity: "group-3-member-2",
          labelHTML: `<label htmlFor="Decent">Decent</label>`,
        },
        {
          labelHTML: `<label htmlFor="Not Applicable">Not Applicable</label>`,
          label: "Not Applicable",
          id: "Not applicable 1",
          value: "0",
          identity: "group-3-member-3",
        },
      ],
      selectedOption: selectedOption3,
      setSelectedOption: setSelectedOption3,
      setTotalScore,
      spinKey: spinKey3,
      setSpinKey: setSpinKey3,
      selectedId: selectedId3,
      setSelectedId: setSelectedId3,
    },
    {
      categoryId: 4,
      categoryTitle: "4.Nominated occupation",
      categoryDescription: `
      <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">
             Is your nominated occupation on the ACT Critical Skills List?
            </h1>
          </div>
      `,
      options: [
        {
          label:
            "Your nominated occupation is ON the ACT Critical Skills List.",
          value: "20",
          identity: "group-4-member-1",
          labelHTML: `<label htmlFor="Your nominated occupation is ON the ACT Critical Skills List.">Your nominated occupation is ON the ACT Critical Skills List.</label>`,
        },
        {
          label:
            "Your nominated occupation is NOT on the ACT Critical Skills List.",
          value: "00",
          identity: "group-4-member-2",
          labelHTML: `<label htmlFor="Your nominated occupation is NOT on the ACT Critical Skills List.">Your nominated occupation is NOT on the ACT Critical Skills List.</label>`,
        },
      ],
      selectedOption: selectedOption4,
      setSelectedOption: setSelectedOption4,
      setTotalScore,
      spinKey: spinKey4,
      setSpinKey: setSpinKey4,
      selectedId: selectedId4,
      setSelectedId: setSelectedId4,
    },
    {
      categoryId: 5,
      categoryTitle: "5. Small business owner",
      categoryDescription: `
       <div>
            <h1 className="font-bold text-lg">
              Are you the majority owner (at least 51%) of a registered business
              actively operating in the ACT? You must meet the following minimum
              criteria:
            </h1>
            <ul className="px-3 list-disc marker:text-red-900 font-semibold flex flex-col gap-1">
              <li>
                The business activity is in the ACT. Interstate / overseas
                business activity is not accepted
              </li>
              <li>Your business is profitable.</li>
              <li>
                Your business is paying you the following taxable income:
                <ul className="list-disc marker:text-red-900 px-6">
                  <li>
                    190 nomination: at least $26,000 in the last six months.
                  </li>
                  <li>
                    491 nomination: at least $13,000 in the last three months
                  </li>
                </ul>
              </li>
              <li>
                At date of Canberra Matrix submission, you are employing at
                least one Australian citizen, permanent resident, or New Zealand
                citizen. Additionally, one employee must have been employed for
                at least 13 weeks at a minimum of 20 hours per week.
                <ul className="list-disc marker:text-red-900 px-6">
                  <li>
                    The employee's employment does not have to be continuous.
                  </li>
                  <li>
                    The employment is in accordance with Australian legislation.
                  </li>
                  <li>
                    The employee is a resident in Canberra. You MUST provide a
                    statutory declaration confirming the employment and
                    citizenship details for each employee.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
      `,
      options: [
        {
          label:
            "Your business has actively traded in Canberra for at least twelve months from the date you established or purchased the business. The business has a minimum turnover of at least $200,000 for the last twelve months business activity.",
          value: "20",
          identity: "group-5-member-1",
          labelHTML: `<label htmlFor="Your business has actively traded in Canberra for at least twelve months from the date you established or purchased the business. The business has a minimum turnover of at least $200,000 for the last twelve months business activity.">Your business has actively traded in Canberra for at least twelve months from the date you established or purchased the business. The business has a minimum turnover of at least $200,000 for the last twelve months business activity.</label>`,
        },
        {
          label:
            "Your business has actively traded in Canberra for at least six months from the date you established or purchased the business. The business has a minimum annual turnover of at least $100,000 for the last six months business activity.",
          value: "10",
          identity: "group-5-member-2",
          labelHTML: `<label htmlFor="Your business has actively traded in Canberra for at least six months from the date you established or purchased the business. The business has a minimum annual turnover of at least $100,000 for the last six months business activity.">Your business has actively traded in Canberra for at least six months from the date you established or purchased the business. The business has a minimum annual turnover of at least $100,000 for the last six months business activity.</label>`,
        },
        {
          label: "Not Applicable",
          id: "Not applicable 2",
          value: "0000",
          labelHTML: `<label htmlFor="Not applicable 2">Not Applicable</label>`,
          identity: "group-5-member-3",
        },
      ],
      selectedOption: selectedOption5,
      setSelectedOption: setSelectedOption5,
      setTotalScore,
      spinKey: spinKey5,
      setSpinKey: setSpinKey5,
      selectedId: selectedId5,
      setSelectedId: setSelectedId5,
    },
    {
      categoryId: 6,
      categoryTitle: "6. Length of ACT employment",
      categoryDescription: `
         <div>
            <h1 className="font-bold text-lg">
              How long have you worked in Canberra in the last two years? You
              can work in any occupation, your employment does not need to be
              continuous, and you can work for more than one ACT employer (or be
              self-employed on an ABN). You must meet the following minimum
              criteria:
            </h1>
            <ul className="px-3 list-disc marker:text-red-900 font-semibold flex flex-col gap-1">
              <li>
                You worked a minimum 20 hours per week for each week claimed
                towards the period of employment.
              </li>

              <li>
                If you are claiming any period of self-employment:
                <ul className="list-disc marker:text-red-900 px-6">
                  <li>
                    Your gross (taxable) weekly income must exceed $520 for each
                    week of employment claimed; and
                  </li>
                  <li>
                    Your business must have been operating in Canberra for at
                    least 12 months.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
      `,
      options: [
        {
          label: "Employed for 12 months plus.",
          value: "10",
          identity: "group-6-member-1",
          labelHTML: `<label htmlFor="Employed for 12 months plus.">Employed for 12 months plus.</label>`,
        },
        {
          label: "Employed for six to 12 months.",
          value: "5",
          identity: "group-6-member-2",
          labelHTML: `<label htmlFor="Employed for six to 12 months.">Employed for six to 12 months.</label>`,
        },
        {
          label: "Not Applicable",
          id: "Not applicable 3",
          value: "000000",
          identity: "group-6-member-3",
          labelHTML: `<label htmlFor="Not Applicable 3">Not Applicable</label>`,
        },
      ],
      selectedOption: selectedOption6,
      setSelectedOption: setSelectedOption6,
      setTotalScore,
      spinKey: spinKey6,
      setSpinKey: setSpinKey6,
      selectedId: selectedId6,
      setSelectedId: setSelectedId6,
    },
    {
      categoryId: 7,
      categoryTitle: "7. ACT employment - skill level",
      categoryDescription: `
          <div>
            <h1 className="font-bold text-lg">
              Are you currently working in Canberra in a highly skilled
              position? You may work for more than one ACT employer, operate a
              small business and / or be self-employed though you must be
              working in the same occupation and at the same skill level. You
              must meet the following minimum criteria:
            </h1>
            <ul className="px-3 list-disc marker:text-red-900 font-semibold flex flex-col gap-1">
              <li>
                You worked a minimum 20 hours per week for the 13 weeks before
                Canberra Matrix submission.
              </li>
              <li>
                The employment was continuous unless you were on unpaid leave
                with a valid medical certificate. Any period of unpaid leave
                cannot be counted towards the 13 weeks employment.
              </li>
              <li>
                Gross Taxable income:
                <ul className="list-disc marker:text-red-900 px-6">
                  <li>
                    Employee: no less than $26 per hour (excluding casual
                    loading).
                  </li>
                  <li>
                    Small Business owner: minimum $13,000 income for last three
                    months.
                  </li>
                  <li>Self-employment on an ABN: minimum $520 per week.</li>
                </ul>
              </li>
              <li>
                Any employment claimed must be recorded on your SkillSelect EOI.
              </li>
            </ul>
          </div>
      `,
      options: [
        {
          label:
            "You are working in your nominated occupation which is on the current ACT Critical Skills List. Your occupation must be recorded as ‘related to the nominated occupation’ on your SkillSelect EOI.",
          value: "20",
          identity: "group-7-member-1",
          labelHTML: `<label htmlFor="You are working in your nominated occupation which is on the current ACT Critical Skills List. Your occupation must be recorded as ‘related to the nominated occupation’ on your SkillSelect EOI.">You are working in your nominated occupation which is on the current ACT Critical Skills List. Your occupation must be recorded as ‘related to the nominated occupation’ on your SkillSelect EOI.</label>`,
        },
        {
          label:
            "You are the primary holder of a subclass 457 / 482 visa and you are working in the occupation nominated by the ACT employer who sponsored your visa. Your occupation must be recorded as ‘related to the nominated occupation’ on your SkillSelect EOI.",
          value: "15",
          identity: "group-7-member-2",
          labelHTML: `<label htmlFor="You are the primary holder of a subclass 457 / 482 visa and you are working in the occupation nominated by the ACT employer who sponsored your visa. Your occupation must be recorded as ‘related to the nominated occupation’ on your SkillSelect EOI.">You are the primary holder of a subclass 457 / 482 visa and you are working in the occupation nominated by the ACT employer who sponsored your visa. Your occupation must be recorded as ‘related to the nominated occupation’ on your SkillSelect EOI.</label>`,
        },
        {
          label:
            "You are working in an occupation that is on the current ACT Critical Skills List; but it is not your nominated occupation. You must have a tertiary qualification relevant to your occupation. Your relevant qualification must be recorded on your Home Affairs SkillSelect EOI.",
          value: "10",
          identity: "group-7-member-3",
          labelHTML: `<label htmlFor="You are working in an occupation that is on the current ACT Critical Skills List; but it is not your nominated occupation. You must have a tertiary qualification relevant to your occupation. Your relevant qualification must be recorded on your Home Affairs SkillSelect EOI.">You are working in an occupation that is on the current ACT Critical Skills List; but it is not your nominated occupation. You must have a tertiary qualification relevant to your occupation. Your relevant qualification must be recorded on your Home Affairs SkillSelect EOI.</label>`,
        },
        {
          label:
            "You are working in an occupation that has an ANZSCO skill level 1 to 3. You must have a tertiary qualification relevant to your occupation. Your relevant qualification must be recorded on your Home Affairs SkillSelect EOI.",
          value: "5",
          identity: "group-7-member-4",
          labelHTML: `<label htmlFor="You are working in an occupation that has an ANZSCO skill level 1 to 3. You must have a tertiary qualification relevant to your occupation. Your relevant qualification must be recorded on your Home Affairs SkillSelect EOI.">You are working in an occupation that has an ANZSCO skill level 1 to 3. You must have a tertiary qualification relevant to your occupation. Your relevant qualification must be recorded on your Home Affairs SkillSelect EOI.</label>`,
        },
        {
          label: "Not Applicable",
          id: "Not applicable 4",
          value: "0",
          identity: "group-7-member-5",
          labelHTML: `<label htmlFor="Not Applicable 4">Not Applicable</label>`,
        },
      ],
      selectedOption: selectedOption7,
      setSelectedOption: setSelectedOption7,
      setTotalScore,
      spinKey: spinKey7,
      setSpinKey: setSpinKey7,
      selectedId: selectedId7,
      setSelectedId: setSelectedId7,
    },
    {
      categoryId: 8,
      categoryTitle: "8. Spouse/Partner employment",
      categoryDescription: `
          <div>
            <h1 className="font-bold text-lg">
             Is your spouse / partner currently working in the ACT or surrounding 'commuter' region? They can work for more than one employer and / or be self-employed. However, they must meet the following minimum criteria:
            </h1>
            <ul className="px-3 list-disc marker:text-red-900 font-semibold flex flex-col gap-1">
              <li>
               They are working a minimum of 20 hours per week for the 13 weeks before Canberra Matrix submission.
              </li>
              <li>
               Their employment must be continuous unless they were on unpaid leave with a valid medical certificate. Any period of unpaid leave cannot be counted towards the 13 weeks employment.
              </li>
              <li>
              They meet the Home Affairs requirement for ‘competent’ English or hold an Australian passport.
              </li>
              <li>
              Their employer must provide a Statutory Declaration confirming their employment. See Attachment E.
              </li>
              <li>
                If they are self-employed on an ABN:
                <ul className="list-disc marker:text-red-900 px-6">
                  <li>
                    Their taxable weekly income exceeds $520 for each week of employment claimed; and
                  </li>
                  <li>
                   Their business has been actively operating in Canberra for at least 12 months.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
      `,
      options: [
        {
          label:
            "They are working in an occupation on the ACT Critical Skills List. They must have a skill assessment, dated within the last 3 years, that is relevant to their current employment. Their taxable income must be no less than $26 per hour (excluding casual loading).",
          value: "15",
          identity: "group-8-member-1",
          labelHTML: `<label htmlFor="They are working in an occupation on the ACT Critical Skills List. They must have a skill assessment, dated within the last 3 years, that is relevant to their current employment. Their taxable income must be no less than $26 per hour (excluding casual loading).">They are working in an occupation on the ACT Critical Skills List. They must have a skill assessment, dated within the last 3 years, that is relevant to their current employment. Their taxable income must be no less than $26 per hour (excluding casual loading).</label>`,
        },
        {
          label:
            "They have a skill assessment, dated within the last 3 years, that is relevant to their current ACT employment. Their gross income must be no less than $26 per hour (excluding casual loading).",
          value: "10",
          identity: "group-8-member-2",
          labelHTML: `<label htmlFor="They have a skill assessment, dated within the last 3 years, that is relevant to their current ACT employment. Their gross income must be no less than $26 per hour (excluding casual loading).">They have a skill assessment, dated within the last 3 years, that is relevant to their current ACT employment. Their gross income must be no less than $26 per hour (excluding casual loading).</label>`,
        },
        {
          label:
            "They are currently working in any occupation, at any skill level, in Canberra.",
          value: "5",
          identity: "group-8-member-3",
          labelHTML: `<div>
                <label htmlFor="They are currently working in any occupation, at any skill level, in Canberra.">
                  They are currently working in any occupation, at any skill
                  level, in Canberra.
                </label>
                <br />
                <br />
                <br />
                <span className="underline font-bold text-gray-700">
                  Spouse employability
                </span>
              </div>`,
        },
        {
          label: "They do not meet the 3 months employment criterion",
          value: "5",
          identity: "group-8-member-4",
          labelHTML: ` <label htmlFor="They do not meet the 3 months employment criterion" className="font-semibold">
                <h1>
                  They do not meet the 3 months employment criterion, but they:{" "}
                </h1>
                <ul className="list-disc px-2">
                  <li>
                    Have a tertiary qualification (a trade certificate; a
                    Bachelors degree; a Master's degree or a PhD) from an
                    Australian institution in any occupation; and
                  </li>
                  <li>
                    They meet the Home Affairs requirement for ‘competent’
                    English or hold an Australian passport.
                  </li>
                </ul>
              </label>`,
        },
        {
          label: "Not Applicable",
          id: "Not applicable 5",
          value: "0",
          identity: "group-8-member-5",
          labelHTML: `<label htmlFor="Not Applicable 5">Not Applicable</label>`,
        },
      ],
      selectedOption: selectedOption8,
      setSelectedOption: setSelectedOption8,
      setTotalScore,
      spinKey: spinKey8,
      setSpinKey: setSpinKey8,
      selectedId: selectedId8,
      setSelectedId: setSelectedId8,
    },
    {
      categoryId: 9,
      categoryTitle: "9. Tertiary qualification",
      categoryDescription: `
        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">
              What tertiary qualification do you hold from an Australian or
              International educational institution?
            </h1>
            <p className="font-semibold">
              Your selected qualification must be recorded on your Home Affairs
              SkillSelect EOI.
            </p>
            <p className="font-semibold">
              If the skill assessing body has assessed your selected
              qualification and it is not equivalent to the same Australian
              Qualification Framework level, you can only claim the level at
              which it has been assessed.
            </p>
          </div>
      `,
      options: [
        {
          label: "Doctoral degree",
          value: "20",
          identity: "group-9-member-1",
          labelHTML: `<label htmlFor="Doctoral degree">Doctoral degree</label>`,
        },
        {
          label: "Master’s degree",
          value: "15",
          identity: "group-9-member-2",
          labelHTML: `<label htmlFor="Master’s degree">Master’s degree</label>`,
        },
        {
          label: "Bachelor’s degree or trade certificate",
          value: "10",
          identity: "group-9-member-3",
          labelHTML: `<label htmlFor="Bachelor’s degree or trade certificate">Bachelor’s degree or trade certificate</label>`,
        },
        {
          label: "Diploma - at least 18 months full-time study",
          value: "5",
          identity: "group-9-member-4",
          labelHTML: `<label htmlFor="Diploma - at least 18 months full-time study">Diploma - at least 18 months full-time study</label>`,
        },
        {
          label: "Not Applicable",
          id: "Not applicable 6",
          value: "0",
          identity: "group-9-member-5",
          labelHTML: `<label htmlFor="Not applicable 6">Not applicable</label>`,
        },
      ],
      selectedOption: selectedOption9,
      setSelectedOption: setSelectedOption9,
      setTotalScore,
      spinKey: spinKey9,
      setSpinKey: setSpinKey9,
      selectedId: selectedId9,
      setSelectedId: setSelectedId9,
    },
    {
      categoryId: 10,
      categoryTitle: "10. Years of study at an ACT tertiary institution",
      categoryDescription: `
          <div>
            <h1 className="font-bold text-lg">
             For how many years did you study fulltime to complete a CRICOS* registered course and / or attend a Professional Year (PY) program at an ACT institution in the last eight years? A PY undertaken in the ACT meets the one-year study criteria.
            </h1>
            <ul className="px-3 my-3 list-disc marker:text-red-900 font-semibold flex flex-col gap-1">
              <li>
               You have a letter of course completion to evidence the claimed period of study.
              </li>
              <li>
                You are resident in Canberra during your claimed period of study.
              </li>
              <li>
              You attended education in person. Distance education or online attendance is not accepted.
              </li>
              <li>
              A PY undertaken in the ACT meets the one-year study criteria.
              </li>
              <li>
              Two or more courses, including a PY, may be counted to prove the period of ACT study if the courses are not concurrent. The courses do not have to be continuous.
              </li>
            </ul>
            <h1 className="font-semibold">
            *CRICOS - Commonwealth Register of Institutions and Courses for Overseas Students.
            </h1>
          </div>
      `,
      options: [
        {
          label: "Four academic years or more of study.",
          value: "20",
          identity: "group-10-member-1",
          labelHTML: `<label htmlFor="Four academic years or more of study.">Four academic years or more of study.</label>`,
        },
        {
          label: "Three academic years of study.",
          value: "15",
          identity: "group-10-member-2",
          labelHTML: `<label htmlFor="Three academic years of study.">Three academic years of study.</label>`,
        },
        {
          label: "Two academic years of study.",
          value: "10",
          identity: "group-10-member-3",
          labelHTML: `<label htmlFor="Two academic years of study.">Two academic years of study.</label>`,
        },
        {
          label: "One academic year of study.",
          value: "5",
          identity: "group-10-member-4",
          labelHTML: `<label htmlFor="One academic year of study.">One academic year of study.</label>`,
        },
        {
          label: "Not Applicable",
          id: "Not applicable 7",
          value: "0",
          identity: "group-10-member-5",
          labelHTML: `<label htmlFor="Not applicable 7">Not applicable</label>`,
        },
      ],
      selectedOption: selectedOption10,
      setSelectedOption: setSelectedOption10,
      setTotalScore,
      spinKey: spinKey10,
      setSpinKey: setSpinKey10,
      selectedId: selectedId10,
      setSelectedId: setSelectedId10,
    },
    {
      categoryId: 11,
      categoryTitle: "11. Close family ties",
      categoryDescription: `
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">
           Do you have a close family member who has lived in Canberra for the last two years? They must be an Australian citizen/permanent resident.
            </h1>
            <h1 className="font-semibold">
           A close family member is defined as a spouse/ partner, child, parent, brother, sister, aunt, uncle or grandparent of the main applicant or their spouse/ partner.
            </h1>
          </div>
      `,
      options: [
        {
          label: "Spouse/partner, child.",
          value: "20",
          identity: "group-11-member-1",
          labelHTML: `<label htmlFor="Spouse/partner, child.">Spouse/partner, child.</label>`,
        },
        {
          label: "Parent, grandparent, brother, sister, aunt or uncle.",
          value: "10",
          identity: "group-11-member-2",
          labelHTML: `<label htmlFor="Parent, grandparent, brother, sister, aunt or uncle.">Parent, grandparent, brother, sister, aunt or uncle.</label>`,
        },
        {
          label: "Not Applicable",
          id: "Not applicable 8",
          value: "0",
          identity: "group-11-member-3",
          labelHTML: `<label htmlFor="Not Applicable 8">Not Applicable</label>`,
        },
      ],
      selectedOption: selectedOption11,
      setSelectedOption: setSelectedOption11,
      setTotalScore,
      spinKey: spinKey11,
      setSpinKey: setSpinKey11,
      selectedId: selectedId11,
      setSelectedId: setSelectedId11,
    },
    {
      categoryId: 12,
      categoryTitle: "12. Assets in Canberra",
      categoryDescription: `
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">
          You (and a spouse/partner if applicable) have invested at least $250,000 cash to purchase a residential or commercial property in Canberra (purchase of land only does not meet this criteria). You hold the Certificate of Title and / or rates notice to prove ownership.
            </h1>
          </div>
      `,
      options: [
        {
          label:
            "Minimum $250,000 cash investment in ACT residential or commercial property.",
          value: "5",
          identity: "group-12-member-1",
          labelHTML: `<label htmlFor="Minimum $250,000 cash investment in ACT residential or commercial property.">Minimum $250,000 cash investment in ACT residential or commercial property.</label>`,
        },
        {
          label: "Not Applicable",
          id: "Not applicable 9",
          value: "0",
          identity: "group-12-member-2",
          labelHTML: `<label htmlFor="Not applicable 9">Not applicable</label>`,
        },
      ],
      selectedOption: selectedOption12,
      setSelectedOption: setSelectedOption12,
      setTotalScore,
      spinKey: spinKey12,
      setSpinKey: setSpinKey12,
      selectedId: selectedId12,
      setSelectedId: setSelectedId12,
    },
  ];

  const handleReset = () => {
    setSelectedOption1(null);
    setSelectedOption2(null);
    setSelectedOption3(null);
    setSelectedOption4(null);
    setSelectedOption5(null);
    setSelectedOption6(null);
    setSelectedOption7(null);
    setSelectedOption8(null);
    setSelectedOption9(null);
    setSelectedOption10(null);
    setSelectedOption11(null);
    setSelectedOption12(null);

    setTotalScore(0);

    setSelectedId1(null);
    setSelectedId2(null);
    setSelectedId3(null);
    setSelectedId4(null);
    setSelectedId5(null);
    setSelectedId6(null);
    setSelectedId7(null);
    setSelectedId8(null);
    setSelectedId9(null);
    setSelectedId10(null);
    setSelectedId11(null);
    setSelectedId12(null);
    // Reset all spin keys on reset
    setSpinKey1((prevKey) => prevKey + 1);
    setSpinKey2((prevKey) => prevKey + 1);
    setSpinKey3((prevKey) => prevKey + 1);
    setSpinKey4((prevKey) => prevKey + 1);
    setSpinKey5((prevKey) => prevKey + 1);
    setSpinKey6((prevKey) => prevKey + 1);
    setSpinKey7((prevKey) => prevKey + 1);
    setSpinKey8((prevKey) => prevKey + 1);
    setSpinKey9((prevKey) => prevKey + 1);
    setSpinKey10((prevKey) => prevKey + 1);
    setSpinKey11((prevKey) => prevKey + 1);
    setSpinKey12((prevKey) => prevKey + 1);
  };

  return (
    <>
      <section className="max-w-[1000px] mx-auto p-5 overflow-hidden">
        <div className="w-full border-4 border-red-800">
          <div className="w-full hidden sm:grid grid-cols-3 py-7 px-5">
            <span className="font-semibold text-xl">Category</span>
            <span className="font-semibold text-xl pl-8 md:pl-13">Options</span>
            <span className="font-semibold text-xl text-end">
              Points Gained
            </span>
          </div>

          {/* Render categories dynamically */}
          {categories.map((category) => (
            <Category key={category.categoryId} {...category} />
          ))}

          {/* Total Score */}
          <div className="font-bold px-5 flex items-center justify-center py-10 text-4xl w-full bg-red-800 text-white">
            Total Score: {totalScore} / 195
          </div>

          {/* Reset Button */}
          <div className="w-full text-center py-5">
            <button
              className="bg-red-800 cursor-pointer text-white px-6 py-3 rounded-md"
              onClick={handleReset}
            >
              Reset Matrix
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App2;
