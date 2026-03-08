import { useTranslations } from "next-intl";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <main className="flex max-w-2xl flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">{t("heading")}</h1>
        <p className="text-muted-foreground text-lg">{t("subtitle")}</p>
        <div className="flex gap-4">
          <Button>{t("getStarted")}</Button>
          <Button variant="outline">{t("learnMore")}</Button>
        </div>
      </main>
    </div>
  );
}
