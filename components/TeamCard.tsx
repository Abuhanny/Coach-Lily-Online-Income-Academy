import Image from "next/image";
import { Mail } from "lucide-react";
import type { TeamMember } from "@/lib/mockData";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="glass rounded-3xl p-6 text-center">
      <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold">
        {member.name}
      </h3>

      <p className="text-sm font-medium text-pink">
        {member.role}
      </p>

      {member.bio && (
        <p className="mt-3 text-sm text-ink/60 dark:text-white/60">
          {member.bio}
        </p>
      )}

      {member.contact && (
        <a
          href={`mailto:${member.contact}`}
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ink/60 hover:text-pink dark:text-white/60"
        >
          <Mail size={13} /> {member.contact}
        </a>
      )}

      {member.socials && (
        <div className="mt-3 flex justify-center gap-2">
          {member.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium hover:bg-pink/10 hover:text-pink dark:bg-white/10"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}