import { profile } from "@/content/profile";
import { useI18n } from "@/lib/i18n";

export function ProfilePhoto({
  variant = "hero",
  className = "",
}: {
  variant?: "hero" | "about";
  className?: string;
}) {
  const { t } = useI18n();

  return (
    <figure className={`profile-photo-frame relative overflow-hidden ${className}`}>
      <img
        src={profile.images.portrait}
        alt={t.common.profilePhotoAlt}
        width={1122}
        height={1402}
        loading={variant === "hero" ? "eager" : "lazy"}
        fetchPriority={variant === "hero" ? "high" : "auto"}
        className="profile-portrait portrait-dark block w-full"
      />
      <img
        src={profile.images.portraitLight}
        alt={t.common.profilePhotoAlt}
        width={1122}
        height={1402}
        loading={variant === "hero" ? "eager" : "lazy"}
        fetchPriority={variant === "hero" ? "high" : "auto"}
        className="profile-portrait portrait-light w-full"
      />
    </figure>
  );
}
