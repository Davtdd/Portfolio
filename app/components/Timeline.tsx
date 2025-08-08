// src/components/Timeline.tsx
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

interface TimelineEvent {
  date: string;
  title: string;
  institution: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>

      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative pl-16">
            <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600">
              {event.title.includes("Stage") ||
              event.title.includes("Alternance") ? (
                <BriefcaseIcon className="h-4 w-4 text-white" />
              ) : (
                <AcademicCapIcon className="h-4 w-4 text-white" />
              )}
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full mb-3">
                {event.date}
              </span>
              <h3 className="text-xl font-bold mb-1">{event.title}</h3>
              <p className="text-cyan-400 mb-3">{event.institution}</p>
              <p className="text-gray-400">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
