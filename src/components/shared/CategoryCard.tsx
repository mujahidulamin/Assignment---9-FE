import Link from "next/link";

const CategoryCard = ({ card }: any) => {
  return (
    <Link href={`/services/category/${card?._id}`}>
      <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
        <div className="flex gap-4 align-middle">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            {card?.name}
          </h3>
        </div>
      </article>
    </Link>
  );
};

export default CategoryCard;