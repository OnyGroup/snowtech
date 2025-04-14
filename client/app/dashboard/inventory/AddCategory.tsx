import { useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { 
  Card,
  CardContent
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { 
  AlertCircle,
  CheckCircle2 
} from "lucide-react";
import { 
  Alert,
  AlertDescription
} from "@/components/ui/alert";

interface CategoryData {
  name: string;
  description: string;
}

interface ApiResponse {
  id: number;
  name: string;
  description: string;
}

interface AddCategoryProps {
  onSuccess?: () => void; // Callback to notify parent of success
}

const AddCategory: React.FC<AddCategoryProps> = ({ onSuccess }) => {
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

        // Call onSuccess callback to notify parent
        if (onSuccess) {
          onSuccess(); // This will close the dialog in the parent component
        }
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
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {success && (
          <Alert variant="default" className="mb-4 bg-green-50 border-green-200 text-green-800">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription>Category added successfully!</AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Category Name
            </Label>
            <Input
              id="name"
              name="name"
              value={categoryData.name}
              onChange={handleChange}
              placeholder="Enter category name"
              className="w-full focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Description (optional)
            </Label>
            <Textarea
              id="description"
              name="description"
              value={categoryData.description}
              onChange={handleChange}
              placeholder="Enter category description"
              className="w-full min-h-[100px] focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Adding...
              </>
            ) : (
              "Add Category"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddCategory;