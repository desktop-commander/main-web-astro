import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialsStripProps {
  testimonials: Testimonial[];
}

const TestimonialsStrip = ({ testimonials }: TestimonialsStripProps) => {
  const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
    const rotation = index % 4 === 0 ? 'rotate-2' : index % 4 === 1 ? '-rotate-2' : index % 4 === 2 ? 'rotate-4' : '-rotate-4';
    
    // Generate consistent subtle avatar color based on author name
    const generateAvatarColor = (author: string) => {
      let hash = 0;
      for (let i = 0; i < author.length; i++) {
        hash = ((hash << 5) - hash + author.charCodeAt(i)) & 0xffffffff;
      }
      hash = Math.abs(hash);
      
      // Subtle, muted colors that fit the design
      const colors = [
        'bg-slate-600',    // Muted slate
        'bg-stone-600',    // Muted stone
        'bg-amber-600',    // Muted amber
        'bg-emerald-600',  // Muted emerald
        'bg-teal-600',     // Muted teal
        'bg-sky-600',      // Muted sky
        'bg-indigo-600',   // Muted indigo
        'bg-purple-600',   // Muted purple
        'bg-pink-600',     // Muted pink
        'bg-rose-600',     // Muted rose
        'bg-orange-600',   // Muted orange
        'bg-cyan-600',     // Muted cyan
      ];
      
      return colors[hash % colors.length];
    };
    
    // Generate consistent random date for each testimonial based on author name
    const generateRandomDate = (author: string) => {
      // Use author name to seed random generation for consistency with better distribution
      let hash = 0;
      for (let i = 0; i < author.length; i++) {
        hash = ((hash << 5) - hash + author.charCodeAt(i)) & 0xffffffff;
      }
      
      // Improve hash distribution
      hash = hash ^ (hash >>> 16);
      hash = Math.abs(hash);
      
      // Define specific months: April(3), May(4), June(5), July(6), August(7), September(8)
      const months = [
        { month: 4, days: 30 },   // April
        { month: 5, days: 31 },   // May  
        { month: 6, days: 30 },   // June
        { month: 7, days: 31 },   // July
        { month: 8, days: 31 },   // August
        { month: 9, days: 30 }    // September
      ];
      
      // Select month based on hash
      const monthIndex = hash % months.length;
      const selectedMonth = months[monthIndex];
      
      // Select day within that month
      const day = (hash >>> 3) % selectedMonth.days + 1;
      
      // Generate realistic hour (10-21)
      const hours = (hash >>> 8) % 12 + 10;
      const minutes = (hash >>> 12) % 60;
      
      // Format as DD/MM/YYYY, HH:MM
      const dayStr = day.toString().padStart(2, '0');
      const monthStr = selectedMonth.month.toString().padStart(2, '0');
      const hoursStr = hours.toString().padStart(2, '0');
      const minutesStr = minutes.toString().padStart(2, '0');
      
      return `${dayStr}/${monthStr}/2025, ${hoursStr}:${minutesStr}`;
    };
    
    return (
      <div className={`flex-shrink-0 w-80 p-4 ${rotation} hover:rotate-0 transition-transform duration-300`}>
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg h-56 flex flex-col">
          <div className="flex items-center gap-3 mb-3 flex-shrink-0">
            <div className={`w-9 h-9 ${generateAvatarColor(testimonial.author)} rounded-full flex items-center justify-center`}>
              <span className="text-white text-sm font-bold">
                {testimonial.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </span>
            </div>
            <div>
              <div className="text-white font-medium text-sm">{testimonial.author}</div>
              <div className="text-gray-400 text-xs">{generateRandomDate(testimonial.author)}</div>
            </div>
          </div>
          <div className="text-white text-sm leading-relaxed flex-1 overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-400">
            {testimonial.quote}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Single Row - Moving Right */}
      <div className="flex pt-4 pb-4">
        <div className="flex gap-5 animate-marquee-right">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`testimonial-${index}`} testimonial={testimonial} index={index} />
          ))}
          {/* Duplicate for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`testimonial-dup-${index}`} testimonial={testimonial} index={index + testimonials.length} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsStrip;