import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/component/ui/accordion";
import faqs from "@/Data/faq";

const Faq = () => {
  return (
    <div
      data-aos="fade-up"
      className="pt-[6rem] md:pt-[8rem] pb-20 px-5 bg-gradient-to-b from-sky-50 to-sky-100"
    >
      {/* Title */}
      <h1 className="text-center text-sky-700 font-serif font-bold text-2xl md:text-4xl mb-12">
        Frequently Asked Questions
      </h1>

      {/* FAQ Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, i) => (
          <Accordion key={i} type="single" collapsible className="w-full">
            <AccordionItem
              value={`item-${i + 1}`}
              className="border border-sky-200 rounded-xl shadow-md bg-white overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-le text-sky-700 hover:bg-sky-50 transition-colors font-bold ">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600 bg-sky-50 font-semibold ">
                {faq.awnser}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
