const ParseText = ({ html }: { html: string }) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ParseText;
