import {type Customer } from "../types/customer";
const baseUrl = "http://localhost:5108/api"

interface RequestOptions extends RequestInit {
  body?: any;
}

const headers: HeadersInit = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    // Optional CORS/Origin headers if needed (usually browser handles automatically)
    "Origin": "http://localhost:5173",
  };

export async function apiRequest(
  endpoint: string,
  method: string = "GET",
  body?: Customer | any
) {

  const options: RequestOptions = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    // Attempt to parse JSON if there is content
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error("API Request failed:", error);
    throw error;
  }
}

export async function fetchCustomerById(
  endpoint: string,
  method: string = "GET",
  id:number
) {
  const options: RequestOptions = {
    method,
    headers,
  };

  try {
    const response = await fetch(`${baseUrl}/${endpoint}/${id}`, options);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    // Attempt to parse JSON if there is content
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error("API Request failed:", error);
    throw error;
  }
}

export async function addCustomer(
  endpoint: string,
  method: string = "POST",
  body: any
) {

  const options: RequestOptions = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, options)

    if(!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    // Attempt to parse JSON if there is content
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error("API Request failed:", error);
    throw error;
  }
}

export async function deleteCustomer(
  endpoint:string,
  method: string = "DELETE",
  id: number
) {
  const options: RequestOptions = {
    method,
    headers,
  };

  try {
    const response = await fetch(`${baseUrl}/${endpoint}/${id}`, options)

    if(!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    // Attempt to parse JSON if there is content
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error("API Request failed:", error);
    throw error;
  }
}

export async function updateCustomer(
  endpoint: string,
  method: string = "PUT",
  id: number,
  body: Customer | any
) {

  const options: RequestOptions = {
    method,
    headers,
    body
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {

    const response = await fetch(`${baseUrl}/${endpoint}/${id}`, options)

    if(!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    // Attempt to parse JSON if there is content
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error("API Request failed:", error);
    throw error;
  }
  
}