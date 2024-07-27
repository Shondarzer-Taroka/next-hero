import Link from "next/link";

const AboutContents = () => {
    return (
        <div>
            <li > <Link href={'/about/mission'}>Mission</Link>  </li>
            <li > <Link href={'/about/go'}>Go</Link>   </li>
            <li > <Link href={'/about/history'}>history</Link> </li>
        </div>
    );
};

export default AboutContents;