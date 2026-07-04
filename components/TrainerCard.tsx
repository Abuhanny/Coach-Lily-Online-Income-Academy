import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import type { Trainer } from "@/lib/mockData";

export default function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <div className="glass-strong overflow-hidden rounded-3xl">
      <div className="relative h-56 w-full">
        <Image
          src={trainer.photo}
          alt={trainer.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold">
          {trainer.name}
        </h3>

        <p className="mt-0.5 text-sm font-medium text-pink">
          {trainer.specialization}
        </p>

        <p className="mt-3 text-sm text-ink/60 dark:text-white/60">
          {trainer.bio}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {trainer.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium dark:bg-white/10"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          <a
            href={trainer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !px-4 !py-2 !text-xs"
          >
            <Linkedin size={14} /> LinkedIn
          </a>

          <a
            href={`mailto:${trainer.email}`}
            className="btn-ghost !px-4 !py-2 !text-xs"
          >
            <Mail size={14} /> Email
          </a>
        </div>
      </div>
    </div>
  );
}