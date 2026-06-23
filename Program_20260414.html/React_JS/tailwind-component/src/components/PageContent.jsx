export default function PageContent() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-6 text-gray-700">
        <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-gray-200">
          <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
            Page Content
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            This section displays the main content of the page, including a
            title, a descriptive summary, and a copyright statement at the
            bottom.
          </p>
          <div className="mt-8 space-y-4 text-base leading-7 text-gray-600">
            <p>
              Here you can explain the purpose of the page, highlight important
              features, or provide a short introduction for visitors.
            </p>
            <p>
              The content area is styled with clean spacing and a subtle card
              background to make it easy to read and visually consistent with
              the rest of the layout.
            </p>
          </div>
          <footer className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500">
            © {currentYear} FGS. All rights reserved.
          </footer>
        </div>
      </div>
    </section>
  );
}
