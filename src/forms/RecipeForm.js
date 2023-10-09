import React from "react";
import Form from "./Form";
const FORM_ENDPOINT = process.env.REACT_APP_API + '/api/v1/recipes';

const RecipeForm = () => {
    const additionalData = {
    };

    const { handleSubmit, status, message } = Form({
        additionalData,
    });

    if (status === "success") {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">{message}</div>
            </>
        );
    }

    if (status === "error") {
        return (
            <>
                <div className="text-2xl">Something bad happened!</div>
                <div className="text-md">{message}</div>
            </>
        );
    }

    return (
        <div className="flex flex-row">
            <form
                action={FORM_ENDPOINT}
                onSubmit={e => handleSubmit(e, 'POST')}
                method="POST"
                className="grow"
            >
                <div className="pt-0 mb-3">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                        required
                    />
                </div>
                <div className="pt-0 mb-3">
                    <input
                        type="ingredients"
                        placeholder="Ingredients"
                        name="ingredients"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                        required
                    />
                </div>
                <div className="pt-0 mb-3">
                    <textarea
                        type="steps"
                        placeholder="Steps"
                        name="steps"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                        required
                    />
                </div>
                <div className="pt-0 mb-3">
                    <textarea
                        type="int"
                        placeholder="User ID"
                        name="userID"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                        required
                    />
                </div>
                <div className="pt-0 mb-3">
                    <textarea
                        type="int"
                        placeholder="Category ID"
                        name="categoryID"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                        required
                    />
                </div>
                {status !== "loading" && (
                    <div className="pt-0 mb-3">
                        <button
                            className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
                            type="submit"
                        >
                            Create new recipe
                        </button>
                    </div>
                )}
            </form>
            <form
                action={FORM_ENDPOINT}
                onSubmit={e => handleSubmit(e, 'PUT')}
                method="PUT"
                className="grow"
            >
                <div className="pt-0 mb-3">
                    <input
                        type="int"
                        placeholder="Recipe ID"
                        name="recipeID"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                        required
                    />
                </div>
                <div className="pt-0 mb-3">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                        required
                    />
                </div>
                <div className="pt-0 mb-3">
                    <input
                        type="ingredients"
                        placeholder="Ingredients"
                        name="ingredients"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                        required
                    />
                </div>
                <div className="pt-0 mb-3">
                    <textarea
                        type="steps"
                        placeholder="Steps"
                        name="steps"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                        required
                    />
                </div>
                <div className="pt-0 mb-3">
                    <textarea
                        type="int"
                        placeholder="User ID"
                        name="userID"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                        required
                    />
                </div>
                <div className="pt-0 mb-3">
                    <textarea
                        type="int"
                        placeholder="Category ID"
                        name="categoryID"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                        required
                    />
                </div>
                {status !== "loading" && (
                    <div className="pt-0 mb-3">
                        <button
                            className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
                            type="submit"
                        >
                            Create new recipe
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default RecipeForm;