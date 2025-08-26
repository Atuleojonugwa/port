export default function SkillCard({iconclass, name})  {
    return(
        <div className="flex flex-col text-center cursor-pointer relative p-2.5 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105">
        <i className={`${iconclass} text-[80px] font-light `}></i>
        <span className="mt-5 text-[16px]">{name}</span>
      </div>    
    )

}