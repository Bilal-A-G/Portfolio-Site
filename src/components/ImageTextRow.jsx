const Text = ({leftAlign, subtitle, title, extras}) => {
    return(
        <div className={`${leftAlign ? "w-1/2" : "w-[700px]"} text-black mt-[120px] ${leftAlign ? "pl-[130px]" : "pl-[220px]"} space-y-2 h-[150px]`}>
            <p className="text-[16px] text-black">{subtitle}</p>
            <p className="text-5xl font-semibold text-black">{title}</p>
            {extras}
        </div>
    );
}

const Image = ({leftAlign, image}) => {
    return(
        <div className={`${leftAlign ? "ml-[80px]" : "ml-[0px]"} mt-[70px] h-[540px] ${leftAlign ? "w-[740px]" : "w-[700px]"} bg-black rounded-[40px] inline flex`}>
            <div className="ml-[120px] mt-[40px] h-[460px] w-[460px] border-2 rounded-full absolute"/>
            <div className={`${leftAlign ? "ml-[570px]" : "ml-[90px]"} mt-[450px] h-[60px] w-[60px] border-2 rounded-full absolute`}/>
            <div className={`h-[400px] w-[400px] ${image} bg-cover rounded-full ml-[152px] mt-[69px]`}/>
        </div>
    );
}

const ImageTextRow = ({leftAlign, subtitle, title, image, extras}) => {
    return(
        <div className="h-[650px] w-full bg-off-white flex">
            {leftAlign ?
                <>
                    <Image leftAlign={leftAlign} image={image}/>
                    <Text leftAlign={leftAlign} title={title} subtitle={subtitle} extras={extras}/>
                </>
                :
                <>
                    <Text leftAlign={leftAlign} title={title} subtitle={subtitle} extras={extras}/>
                    <Image leftAlign={leftAlign} image={image}/>
                </>
            }
        </div>
    );
}

export default ImageTextRow;