import { useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

interface CategoryData {
  name: string;
  description: string;
}

interface ApiResponse {
  id: number;
  name: string;
  description: string;
}

const AddCategory: React.FC = () => {
  const [categoryData, setCategoryData] = useState<CategoryData>({
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toast } = useToast();

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Ensure this is set in your .env file

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
  
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Authentication token not found. Please log in.");
      }
  
      const response = await axios.post<ApiResponse>(
        `${API_BASE_URL}store/categories/`,
        categoryData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 201) {
        setSuccess(true);
        setCategoryData({ name: "", description: "" }); // Reset form
  
        // Show success toast
        toast({
          title: "Success!",
          description: "The category has been successfully added.",
          variant: "default",
        });
      }
    } catch (err: any) {
      console.error("Error adding category:", err);
      setError(err.response?.data?.message || "Failed to add category.");
  
      // Show error toast
      toast({
        title: "Error!",
        description: "Failed to add the category. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-category-container">
      <h2>Add Category</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">Category added successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Category Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={categoryData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={categoryData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Category"}
        </button>
      </form>
    </div>
  );
};

export default AddCategory;

