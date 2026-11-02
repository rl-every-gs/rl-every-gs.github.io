(() => {
  const copyButton = document.querySelector("[data-copy]");
  const bibtex = document.querySelector("#bibtex-code");

  copyButton?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(bibtex?.textContent ?? "");
      copyButton.textContent = "Copied";
      window.setTimeout(() => (copyButton.textContent = "Copy"), 1500);
    } catch {
      copyButton.textContent = "Select text";
    }
  });
})();
