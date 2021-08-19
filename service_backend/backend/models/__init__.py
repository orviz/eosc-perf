"""Backend package for models definition. Includes all necessary models
to store benchmark results with all the necessary contextual information.
The following diagram represents a relationships between the SQL models. 

.. image:: ../../schemaspy/diagrams/summary/relationships.real.large.png

Note the classes representing the models might contain additional 
properties. For example association_proxies or column_properties which
are simple mirroring or calculations between self and relationships
properties. 

All exported models are based on :class:`backend.models.core.BaseModel`:

.. autoclass:: backend.models.core.BaseModel
   :members:
   :member-order: bysource
   :undoc-members:

The following chapters represent the expected usable models and their
main accessible properties. Some tables such as results_tags or 
report_association are built-in tables automatically generated by the
corresponding mixin (i.e. report.HasReports)
"""
from .models.benchmark import Benchmark
from .models.flavor import Flavor
from .models.report import Report
from .models.result import Result
from .models.site import Site
from .models.tag import Tag
from .models.user import User

__all__ = [
    "Benchmark",
    "Report",
    "Result",
    "Site",
    "Flavor",
    "Tag",
    "User"
]
