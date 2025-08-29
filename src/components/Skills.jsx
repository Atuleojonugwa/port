export default function SkillCard({iconclass, name})  {
    return(
        <div className="flex flex-col text-center cursor-pointer  p-2.5 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105">
        <i className={`${iconclass} text-[40px] font-light sm:text-[80px]`}></i>
        <span className="mt-2.5 text-[16px] sm:mt-5">{name}</span>
      </div>    
    )

}