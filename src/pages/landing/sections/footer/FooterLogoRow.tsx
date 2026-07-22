import LogoDUE from "../../../../assets/refactor-v1/logo-due.png";
import SMELogoWhite from "../../../../assets/refactor-v1/logo-due-sme-growth-white.png";
import SMELogo from "../../../../assets/refactor-v1/logo-due-sme-growth.png";

export const FooterLogoRow = () => (
  <div className="flex items-center justify-center gap-5 mb-8">
    <img src={LogoDUE} alt="Logo DUE" className="h-16 w-auto" />

    <img
      src={SMELogoWhite}
      alt="DUE SME Growth 2026"
      className="h-14 w-auto object-contain"
      onError={(e) => {
        (e.target as HTMLImageElement).src = SMELogo;
      }}
    />
  </div>
);
