export const InstructorAvatar = ({ name }: { name: string }) => {
  const initial = name.split(" ").slice(-1)[0][0];
  const colors = [
    "bg-gradient-to-br from-[#1b5e9e] to-[#2c82c9]",
    "bg-gradient-to-br from-[#e85d24] to-[#ff9a5c]",
    "bg-gradient-to-br from-[#004b87] to-[#1b5e9e]",
    "bg-gradient-to-br from-[#2c82c9] to-[#1b5e9e]",
  ];
  const colorIdx = name.charCodeAt(name.length - 1) % colors.length;
  return (
    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 text-white font-extrabold text-lg shrink-0 mx-auto transition-transform duration-300 group-hover:scale-110 ${colors[colorIdx]}`}>
      {initial}
    </div>
  );
};
