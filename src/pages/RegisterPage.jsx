import { ArrowRight } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const RegisterPage = () => {
  const {
    register,
    registerFormSubmit,
    handleSubmit,
    navigate,
    errors,
    isSubmitting,
  } = useAuth();

  return (
    <main className="min-h-screen bg-(--bg-color) text-(--text-color)">
      <section className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center px-5 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">

        {/* Hero */}
        <div className="mb-12 sm:mb-16 lg:mb-24">
          <div className="flex items-start justify-between gap-6">
            <div>
              {/* Login Link */}
              <button
                onClick={() => navigate("/auth/login")}
                className="flex group items-center gap-2 whitespace-nowrap font-inter text-base lg:text-lg text-(--text-muted) transition-colors cursor-pointer"
              >
                <span className="hidden sm:block">Already have an account? </span><span className="sm:italic group-hover:text-(--text-color)">Sign in</span>

                <ArrowRight
                  size={18}
                  className="group-hover:text-(--text-color) transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <h1 className="font-inter text-[clamp(3.1rem,9vw,7rem)] font-semibold tracking-tighter leading-none mt-3 sm:mt-4 lg:mt-5">
                Create
                <br />
                Account.
              </h1>
              <p className="hidden sm:block mt-4 sm:mt-5 lg:mt-6 max-w-md font-space leading-relaxed text-(--text-muted)">
                Create your account to save your wishlist, track
                orders, and enjoy a personalized shopping experience.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(registerFormSubmit)}
          className="max-w-full lg:max-w-7xl"
        >

          {/* Name */}

          <div className="pb-4 sm:pb-8 lg:pb-10 border-b border-(--border-color)">

            <label className="font-inter uppercase tracking-[0.25em] text-xs text-(--text-muted)">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="flex-1
                w-full
                mt-3 sm:mt-4 lg:mt-5
                bg-transparent
                outline-none
                font-inter
                text-[clamp(2rem,6vw,4rem)]
                font-medium
                leading-tight
                placeholder:text-(--text-muted)/35
                caret-(--text-color)
              "
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />

            {errors.name && (
              <p className="mt-2 sm:mt-3 text-sm text-(--red)">
                {errors.name.message}
              </p>
            )}

          </div>

          {/* Email */}

          <div className="py-4 sm:py-8 lg:py-10 border-b border-(--border-color)">

            <label className="font-inter uppercase tracking-[0.25em] text-xs text-(--text-muted)">
              Email
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="flex-1
                w-full
                mt-3 sm:mt-4 lg:mt-5
                bg-transparent
                outline-none
                font-inter
                text-[clamp(2rem,6vw,4rem)]
                font-medium
                leading-tight
                placeholder:text-(--text-muted)/35
                caret-(--text-color)
              "
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />

            {errors.email && (
              <p className="mt-2 sm:mt-3 text-sm text-(--red)">
                {errors.email.message}
              </p>
            )}

          </div>

          {/* Password */}

          <div className="py-4 sm:py-8 lg:py-10 border-b border-(--border-color)">

            <label className="font-inter uppercase tracking-[0.25em] text-xs text-(--text-muted)">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="flex-1
                w-full
                mt-3 sm:mt-4 lg:mt-5
                bg-transparent
                outline-none
                font-inter
                text-[clamp(2rem,6vw,4rem)]
                font-medium
                leading-tight
                placeholder:text-(--text-muted)/35
                caret-(--text-color)
              "
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
            />

            {errors.password && (
              <p className="mt-2 sm:mt-3 text-sm text-(--red)">
                {errors.password.message}
              </p>
            )}

          </div>

          {/* Button */}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group mt-10 sm:mt-12 lg:mt-16 flex items-center gap-5 cursor-pointer"
          >
            <span className="font-inter text-[clamp(2rem,4vw,3rem)] font-semibold">
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </span>

            <div className="w-[clamp(3rem,4vw,4rem)] h-[clamp(3rem,4vw,4rem)] rounded-full border border-(--border-color) flex items-center justify-center gap-12 relative transition-all duration-300 group-hover:bg-(--text-color) group-hover:text-(--bg-color) overflow-hidden">
              <ArrowRight className="absolute transition-transform duration-300 translate-x-0 group-hover:translate-x-10" />
              <ArrowRight className="absolute transition-transform duration-300 -translate-x-10 group-hover:translate-x-0" />
            </div>
          </button>

        </form>

      </section>
    </main>
  );
};

export default RegisterPage;