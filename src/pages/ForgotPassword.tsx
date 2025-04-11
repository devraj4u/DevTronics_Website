
import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { CircuitBoard } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type ForgotPasswordFormValues = z.infer<typeof emailSchema>;

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: window.location.origin + '/login',
      });
      
      if (error) throw error;
      
      setIsSubmitted(true);
      toast.success("Password reset instructions sent to your email.");
      
    } catch (error: any) {
      console.error("Password reset error:", error);
      toast.error(error.message || "Failed to send reset instructions. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-10 px-4 flex justify-center items-center min-h-[70vh]">
        <div className="w-full max-w-md space-y-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <CircuitBoard className="h-12 w-12 text-electric-blue" />
            <h1 className="text-2xl font-bold">Reset your password</h1>
            <p className="text-muted-foreground">
              Enter your email to receive password reset instructions
            </p>
          </div>

          {!isSubmitted ? (
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="you@example.com" 
                            type="email" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-electric-blue hover:bg-deep-blue" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending instructions..." : "Send reset instructions"}
                  </Button>
                </form>
              </Form>
            </div>
          ) : (
            <div className="border rounded-lg p-6 bg-white shadow-sm text-center">
              <div className="my-6 space-y-4">
                <h3 className="text-lg font-medium">Check your email</h3>
                <p className="text-muted-foreground">
                  We have sent password reset instructions to your email address.
                </p>
                <p className="text-sm text-gray-500">
                  Didn't receive an email? Check your spam folder or{" "}
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-electric-blue hover:underline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    try again
                  </Button>
                </p>
              </div>
            </div>
          )}

          <div className="text-center">
            <p className="text-sm text-gray-600">
              <Link to="/login" className="text-electric-blue hover:underline font-medium">
                Back to login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
