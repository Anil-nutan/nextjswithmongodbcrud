import EditTopicForm from "@/components/EditTopicFrom";


const getTopicByID = async(id) => {
    try {
        const res = await fetch(`https://nextjswithmongodbcrud.vercel.app/api/topics/${id}`, {
            cache: "no-store",
        });

        if(!res.ok) {
            throw new Error("Failed to fetch topoic");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditTopic({ params }) {

    const { id } = params;
    const { topic } = await getTopicByID(id);
    const {title, description } = topic;

    return (
        <EditTopicForm id={id} title={title} description={description} />
    )
}
