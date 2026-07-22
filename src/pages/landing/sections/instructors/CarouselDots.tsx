export const CarouselDots = ({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (i: number) => void;
}) => (
  <div className="flex gap-2">
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => onSelect(i)}
        className={`rounded-full transition-all duration-300 h-2.5 ${current === i ? "w-6 bg-card-blue" : "w-2.5 bg-[#cbd5e1]"}`}
        aria-label={`Trang ${i + 1}`}
      />
    ))}
  </div>
);
