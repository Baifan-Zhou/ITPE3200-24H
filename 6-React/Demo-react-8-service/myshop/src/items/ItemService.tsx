import API_URL from '../apiConfig'; // Update the path if necessary

const headers = {
  'Content-Type': 'application/json',
};

const handleResponse = async (response: Response) => {
  if (response.ok) {  // HTTP status code success 200-299
    if (response.status === 204) { // Detele returns 204 No content
      return null;
    }
    return response.json(); // other returns response body as JSON
  } else {
    const errorText = await response.text();
    throw new Error(errorText || 'Network response was not ok');
  }
};

// Get itemlist
export const fetchItems = async () => {
  const response = await fetch(`${API_URL}/api/itemapi/itemlist`);
  return handleResponse(response);
};
// Get item by id
export const fetchItemById = async (itemId: string) => {
  const response = await fetch(`${API_URL}/api/itemapi/${itemId}`);
  return handleResponse(response);
};
// Post create item
export const createItem = async (item: any) => {
  const response = await fetch(`${API_URL}/api/itemapi/create`, {
    method: 'POST',
    headers,
    body: JSON.stringify(item),
  });
  return handleResponse(response);
};
// Put update item
export const updateItem = async (itemId: number, item: any) => {
  const response = await fetch(`${API_URL}/api/itemapi/update/${itemId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(item),
  });
  return handleResponse(response);
};
// Delete item
export const deleteItem = async (itemId: number) => {
  const response = await fetch(`${API_URL}/api/itemapi/delete/${itemId}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};
