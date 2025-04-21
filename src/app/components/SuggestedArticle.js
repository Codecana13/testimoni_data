import Link from "next/link";
import Image from "next/image";

export default function SuggestedArticle({ article }) {
  return (
    <div className="bg-yellow-500 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-yellow-700 hover:border-white p-3">
      {article.imageUrl && (
        <div className="relative w-full h-50">
          <Image src={article.imageUrl} width={980} height={700} layout="intrinsic" objectFit="contain" className="rounded-lg" alt="Suggested" />
        </div>
      )}

      <h3 className="text-md font-semibold mt-2">{article.title}</h3>
      <p className="text-xs text-gray-600">{article.date}</p>
      <p className="mt-1 text-gray-900 text-sm leading-relaxed">
          {article.content.replace(/&nbsp;/g, " ").replace(/<\/?[^>]+(>|$)/g, "").slice(0, 90)}...
        </p>

      <Link href={`/article/${article._id}`}>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 text-xs font-bold rounded-md hover:bg-blue-600">
          Read More
        </button>
      </Link>
    </div>
  );
}
