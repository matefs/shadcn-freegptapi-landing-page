import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is this API really free or will I have to sell my kidney?",
    answer: "Relax, your kidney is safe! The API is 100% free. You only need to sacrifice your time and mental sanity to use it.",
    value: "item-1",
  },
  {
    question: "Can I use the API to create my own ChatGPT and take over the world?",
    answer: "Easy there, Pinky! The API is powerful, but not that powerful. You can create amazing applications, but world domination is still out of reach... for now.",
    value: "item-2",
  },
  {
    question: "Does the API have a request limit? Or can I spam it until the server catches fire?",
    answer: "There is a limit, yes. Think of it as a challenge: how many requests can you make before the API starts ignoring you like your high school crush?",
    value: "item-3",
  },
  {
    question: "If I ask nicely, will the API do my homework for me?",
    answer: "The API is smart, but it's not your mom. It can help you understand your homework, but it won't do it for you. Happy studying!",
    value: "item-4",
  },
  {
    question: "Does the API understand sarcasm? Or do I need to be as direct as a slap in the face?",
    answer: "The API understands sarcasm about as well as a cat understands quantum physics. Better be direct, unless you want hilarious and totally out-of-context responses.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};

