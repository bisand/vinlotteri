using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Vinlotteri.Api;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    app.MapWhen(x => !(x?.Request?.Path.Value ?? string.Empty).StartsWith(new[] { "/api", "/hubs" }), builder =>
    {
        builder.UseSpa(spa =>
        {
            spa.Options.SourcePath = "/workspaces/vinlotteri/vinlotteri.web";
            spa.UseReactDevelopmentServer(npmScript: "start");
        });
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
