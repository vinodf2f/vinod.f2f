function Footer() {
  return (
    <footer className="bg-blue-400">
      <ul className="flex items-center justify-between max-w-4xl p-4 mx-auto text-sm text-white md:p-8">
        <li>
          Created by{" "}
          <a href="https://bryant.io" target="_blank" className="font-bold">
            Vinod
          </a>
        </li>

        <li>
          <a
            href="https://github.com/vinodf2f"
            target="_blank"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
