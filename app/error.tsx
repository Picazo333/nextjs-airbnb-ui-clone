"use client";

import { ErrorState } from "@/components/feedback/ErrorState";

const ErrorPage = ({ retry }: { error: unknown; retry: () => void }) => {
  return (
    <main id="content" className="mx-auto w-full max-w-[var(--container)] flex-1 px-[var(--gutter)] py-12">
      <ErrorState
        title="This page could not be shown"
        body="The preview hit an unexpected problem. Nothing was booked or submitted. Try the page again."
        onRetry={retry}
      />
    </main>
  );
};

export default ErrorPage;
