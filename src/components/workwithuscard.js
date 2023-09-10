const Workwithuscard = ({
	title = "This is title",
	desc = `Lorem ipsum dolor, sit amet consectetur 
            adipi elit. Impedit beatae deserunt 
            aperiam mollitia maiores.`,
}) => {
	return (
		<div className="h-[140px] w-[250px] min-w-[250px] p-5 flex flex-col items-start gap-3 rounded-[16px] shadow">
			<p className=" w-full text-base font-semibold">{title}</p>
			<p className=" w-full text-xs font-light text-justify">{desc}</p>
		</div>
	);
};

export default Workwithuscard;
