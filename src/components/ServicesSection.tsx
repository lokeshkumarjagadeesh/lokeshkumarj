import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Database, 
  BarChart3, 
  FileSpreadsheet, 
  Zap,
  TrendingUp,
  Filter
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Data Preprocessing",
      description: "Clean, transform, and prepare raw data for analysis. Handle missing values, outliers, and data quality issues to ensure reliable insights.",
      icon: Filter,
      features: ["Data Cleaning", "Missing Value Treatment", "Outlier Detection", "Data Validation"]
    },
    {
      title: "Data Transformation",
      description: "Convert data into suitable formats for analysis and modeling. Implement ETL processes and data pipeline development.",
      icon: Zap,
      features: ["ETL Pipelines", "Data Normalization", "Feature Engineering", "Data Integration"]
    },
    {
      title: "Dashboard Building",
      description: "Create interactive and insightful dashboards using Power BI, Tableau, and Python visualization libraries.",
      icon: BarChart3,
      features: ["Power BI Reports", "Tableau Visualizations", "Interactive Charts", "KPI Monitoring"]
    },
    {
      title: "Database Management",
      description: "Design, optimize, and manage databases. Write efficient SQL queries and ensure data integrity and performance.",
      icon: Database,
      features: ["SQL Optimization", "Database Design", "Query Performance", "Data Modeling"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive data analysis solutions to help businesses make informed decisions 
              and unlock the value hidden in their data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="p-4 bg-primary/20 rounded-lg mr-4 group-hover:bg-primary/30 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;