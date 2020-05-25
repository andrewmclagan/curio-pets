export default async function errorHandler(error, form) {
  if (error.name === "HTTPError") {
    const data = await error.response.json();
    if (data.errors && data.errors.length > 0) {
      data.errors.forEach((error) =>
        form.setFieldError(error.field, error.message)
      );
      form.setStatus(data.errors);
    }
  }  
}