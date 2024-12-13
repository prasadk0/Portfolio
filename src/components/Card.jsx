export default function Card(props) {
  return (
    <a
      href="#"
      className="flex m-3 w-full max-w-md flex-col bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-contain w-full h-32 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={props.info.logo}
        alt={`${props.info.projectName} logo`}
      />
      <div className="flex flex-col justify-between p-4">
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {props.info.projectName}
        </h5>
        <p className="text-sm text-left text-gray-700 dark:text-gray-400">
          {props.info.description}
        </p>
      </div>
    </a>
  );
}
