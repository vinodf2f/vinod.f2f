import Layout from "../components/layout";

const EXPERIENCE_DATA: IEducationCard[] = [
  {
    title: "Software Engineer Trainee",
    instituteName: " Causecode technologies, Baner pune",
    duration: "June - Sept 2019",
    place: "Pune, Maharashtra",
    descrption: [
      "Worked on migrating react-redux project to react-graphql.",
      "Worked with backend team and developed frontend using data model.",
      "Was introduced (and Used) to clean coding , DRY coding , Refactoring and SOLID properties for best practices.",
    ],
  },
  {
    title: "Software Engineer (Current)",
    instituteName: " Causecode technologies, Baner pune",
    duration: "Sept 16 ",
    place: "Bangalore, karnataka",
    descrption: [
      "Worked on multiple projects for foreign clients.",
      "Worked at client site for a startup.",
      "Wrote application from scratch to productions.",
    ],
  },
];

interface IEducationCard {
  title: string;
  instituteName: string;
  duration: string;
  grade?: string;
  place: string;
  descrption?: string[];
  projects?: Object[];
}

const EDUCATION_DATA: IEducationCard[] = [
  {
    title: "Secondary School",
    instituteName: " Lal Bahadur Shastri Mahavidyalaya",
    duration: "May 2013",
    grade: "Percentage – 88.18%",
    place: "Udgir",
  },
  {
    title: "Higher Secondary",
    instituteName: "Dr. Chandrabhanu Sonvane Jr. College",
    duration: "May 2015",
    grade: "Percentage – 79.69%",
    place: "Latur",
  },
  {
    title: "BE in Information Technology",
    instituteName: "Government College of Engineering  ",
    duration: "May 2019 ",
    grade: "CGPA– 6.2",
    place: "Aurangabad",
  },
];

const AboutSubHeader = ({ title }) => (
  <div className="bg-gray-200">
    <p>{title}</p>
  </div>
);

const EducationCard = ({
  title,
  duration,
  grade,
  instituteName,
  place,
  descrption,
}: IEducationCard) => {
  return (
    <div className="bg-white rounded-tl-2xl p-2 rounded-br-2xl">
      <p className="font-serif italic">{title}</p>
      <div className="flex flex-row justify-between mt-3">
        <p className="text-sm text-gray-600">{instituteName} </p>
        <p className="text-xs  text-gray-800"> {duration} </p>
      </div>
      <p className="text-xs  text-gray-600">{place}</p>
      <p className=" text-sm  my-2 font-serif text-gray-800">{grade}</p>
      <div className="px-3 mt-3">
        {descrption.map((item) => (
          <p className="text-xs my-1 font-serif ">- {item}</p>
        ))}
      </div>
    </div>
  );
};

function AboutPage() {
  return (
    <Layout>
      <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
        <div className="md:w-1/2">
          <img
            alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer"
            className="w-full"
            src="critter.svg"
          />
        </div>
        <div className="space-y-6 md:w-1/2">
          <AboutSubHeader title="Work Experience" />
          {EXPERIENCE_DATA.map((item) => (
            <EducationCard {...item} key={item.title} />
          ))}
          {/* <AboutSubHeader title="Education" />
          {EDUCATION_DATA.map((item) => (
            <EducationCard {...item} key={item.title} />
          ))} */}
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
// {[
//   {
//     heading: `Education`,
//     body: `Secondary School
//     Lal Bahadur Shastri Mahavidyalaya
//     May 2013 | Udgir India
//     Percentage – 88.18%
//     Higher Secondary
//     Dr. Chandrabhanu Sonvane Jr. College
//     May 2015 | Latur India
//     Percentage – 79.69%
//     BE in Information Technology
//     Government College of Engineering
//     May 2019 | Aurangabad
//     CGPA– 6.2`,
//   },
//   {
//     heading: `What is Next.js?`,
//     body: `Next.js is a minimalistic framework for creating server-rendered
//     React applications.`,
//   },
// ].map((section) => (
//   <div key={section.heading}>
//     <h2 className="mb-3 text-xl font-bold">{section.heading}</h2>
//     <p>{section.body}</p>
//   </div>
// ))}
