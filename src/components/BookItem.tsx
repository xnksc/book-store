import { Book } from "../types";

interface BookItemProps {
  book: Book;
}

const BookItem = ({ book }: BookItemProps) => {
  return (
    <div className="flex justify-center w-full">
      <div className="border border-teal-300 text-center flex flex-col items-center w-full md:w-2/3 rounded-lg p-4 transition-opacity bg-emerald-100 bg-opacity-50 hover:shadow-lg hover:bg-opacity-100">
        <h2 className="text-xl font-semibold text-emerald-700">{book.title}</h2>
        <h3 className="text-lg text-teal-600">{book.subtitle}</h3>
        <p className="text-sm text-teal-600">by {book.author}</p>
        <p className="mt-2 text-gray-700">{book.description}</p>
        <p className="font-bold mt-2 text-emerald-600">{`Price: $${book.price}`}</p>
        <p className="text-xs text-teal-500 mt-1">{`Published on: ${book.date}`}</p>
        <div className="flex gap-x-3 mt-2 pt-2 border-t-teal-200 border-t-2">
          {book.tags.map((tag) => (
            <div
              key={tag}
              className="py-1 px-2 bg-teal-100 text-teal-800 rounded-md"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookItem;
