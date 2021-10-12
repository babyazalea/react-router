import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "ty", text: "Learning React is fun!" },
  { id: "q2", author: "ty", text: "Learning React is great!" },
];

const AllQuotes = () => {
  return (
    <h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </h1>
  );
};

export default AllQuotes;
