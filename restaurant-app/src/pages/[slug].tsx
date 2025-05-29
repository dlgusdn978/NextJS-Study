import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <h1>Router</h1>
      <div>
        <button
          type="button"
          onClick={() => {
            router.push({ pathname: "/[slug]", query: { slug: "push" } });
          }}
        >
          PUSH
        </button>
        <button
          type="button"
          onClick={() => {
            router.replace({ pathname: "/[slug]", query: { slug: "push" } });
          }}
        >
          Replace
        </button>
      </div>
      <div>
        <Link href="/hello">Hello</Link>
      </div>
      <div>
        <Link href="/bye">bye</Link>
      </div>
    </div>
  );
}
