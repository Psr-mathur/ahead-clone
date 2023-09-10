import Section1 from "@/components/homepageSections/Section1";
import Section2 from "@/components/homepageSections/Section2";
import Section3 from "@/components/homepageSections/Section3";
import Section5 from "@/components/homepageSections/Section5";
import Section6 from "@/components/homepageSections/Section6";
import Section4 from "@/components/homepageSections/Section4";
import Section7 from "@/components/homepageSections/Section7";
import Section8 from "@/components/homepageSections/Section8";
import Section9 from "@/components/homepageSections/Section9";
import Section10 from "@/components/homepageSections/Section10";

const Home = () => {
	return (
		<div className=" p-4 sm:py-3 sm:px-12">
			<div className="">
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Section6 />
				<Section7 />
				<Section8 />
				<Section9 />
				<Section10 />
			</div>
		</div>
	);
};

export default Home;
